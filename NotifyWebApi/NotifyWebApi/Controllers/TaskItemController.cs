using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.ModelBinding;
using Microsoft.Ajax.Utilities;
using NotifyWebApi.BLL;
using NotifyWebApi.BLL.Models;

namespace NotifyWebApi.Controllers
{
    [Authorize]
    public class TaskItemController : ApiController
    {
        private readonly TaskBL _bl = new TaskBL();

        // GET: api/TaskItems
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult GetTaskItems()
        {
            var request = _bl.GetTaskItems(GetCurrentUserId());
            return Ok(request);
        }

        // GET: api/TaskItems/5
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult GetTaskItem(long id)
        {
            var result = _bl.GetTaskItem(GetCurrentUserId(), id);

            if (result == null) return NotFound();

            return Ok(result);
        }

        // PUT: api/TaskItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaskItem(long id, TaskItemDto taskItemDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (id != taskItemDto.TaskId) return BadRequest();
            var currentUserId = GetCurrentUserId();
            var nullCheck = _bl.GetTaskItem(currentUserId, id);
            if (nullCheck == null) return NotFound();

            if (currentUserId != taskItemDto.UserId) return Unauthorized();

            _bl.PutTaskItem(taskItemDto);

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TaskItems
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult PostTaskItem(TaskItemDto taskItemDto)
        {
            taskItemDto.UserId = null;
            taskItemDto.UserId = GetCurrentUserId();


            //ModelState["taskItemDto.UserId"].Errors.Clear();
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var taskId = _bl.PostTaskItem(taskItemDto); //todo get id logic

            return CreatedAtRoute("DefaultApi", taskId, taskItemDto);
        }

        // DELETE: api/TaskItems/5
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult DeleteTaskItem(long id)
        {
            var currentUserId = GetCurrentUserId();
            var nullCheck = _bl.GetTaskItem(currentUserId, id);
            if (nullCheck == null) return NotFound();

            _bl.DeleteTaskItem(currentUserId, id);

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        private long GetCurrentUserId()
        {
            var email = User.Identity.Name;
            return Associator.ConvertToId(email);
        }
    }
}