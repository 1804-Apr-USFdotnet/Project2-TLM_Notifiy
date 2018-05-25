using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
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
            var request = _bl.GetTaskItems(WhoAmI());
            return Ok(request);
        }

        // GET: api/TaskItems/5
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult GetTaskItem(long taskId)
        {
            var result = _bl.GetTaskItem(WhoAmI(), taskId);

            if (result == null) return NotFound();

            return Ok(result);
        }

        // PUT: api/TaskItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaskItem(long id, TaskItemDto taskItemDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (id != taskItemDto.TaskId) return BadRequest();

            if (WhoAmI() != taskItemDto.UserId) return Unauthorized();

            _bl.PutTaskItem(taskItemDto);

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TaskItems
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult PostTaskItem(TaskItemDto taskItemDto)
        {
            taskItemDto.UserId = null;
            taskItemDto.UserId = WhoAmI();


            //ModelState["taskItemDto.UserId"].Errors.Clear();
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var taskId = _bl.PostTaskItem(taskItemDto); //todo change BL logic to return ID of crated resource.

            return CreatedAtRoute("DefaultApi", taskId, taskItemDto);
        }

        // DELETE: api/TaskItems/5
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult DeleteTaskItem(long taskId)
        {
            if (GetTaskItem(taskId) == null) return NotFound();
            _bl.DeleteTaskItem(WhoAmI(), taskId);

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        private long WhoAmI()
        {
            var email = User.Identity.Name;
            return Associator.ConvertToId(email);
        }
    }
}