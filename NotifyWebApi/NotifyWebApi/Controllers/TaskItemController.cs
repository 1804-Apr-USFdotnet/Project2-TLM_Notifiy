using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using NotifyWebApi.BLL;
using NotifyWebApi.BLL.Models;
using NotifyWebApi.Models;

namespace NotifyWebApi.Controllers
{   
    [Authorize]
    public class TaskItemController : ApiController
    {
        //ToDo Extract Logic to BLL and switch context out with UnitOfWork.
        //private NotifyWebApiContext db = new NotifyWebApiContext();
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
            
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        //// PUT: api/TaskItems/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutTaskItem(long id, TaskItemDto taskItem)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != taskItem.TaskId)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(taskItem).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!TaskItemExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/TaskItems
        [ResponseType(typeof(TaskItemDto))]
        public IHttpActionResult PostTaskItem(TaskItemDto taskItemDto)
        {
            taskItemDto.UserId = null;
            taskItemDto.UserId = WhoAmI();


            ModelState["taskItemDto.UserId"].Errors.Clear();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var taskId =_bl.PostTaskItem(taskItemDto);//todo change BL logic to return ID of crated resource.

            return CreatedAtRoute("DefaultApi", taskId, taskItemDto);
        }

        //// DELETE: api/TaskItems/5
        //[ResponseType(typeof(TaskItemDto))]
        //public IHttpActionResult DeleteTaskItem(long id)
        //{
        //    TaskItem taskItem = db.TaskItems.Find(id);
        //    if (taskItem == null)
        //    {
        //        return NotFound();
        //    }

        //    db.TaskItems.Remove(taskItem);
        //    db.SaveChanges();

        //    return Ok(taskItem);
        //}

        protected override void Dispose(bool disposing)
        {

            base.Dispose(disposing);
        }

        private long WhoAmI()
        {
            string email = User.Identity.Name;
            return Associator.ConvertToId(email);
            
        }

        //private bool TaskItemExists(long id)
        //{
        //    return db.TaskItems.Count(e => e.TaskId == id) > 0;
        //}
    }
}