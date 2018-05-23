using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NotifyWebApi.BLL.Models;

namespace NotifyWebApi.BLL
{
    class TaskBL
    {
        //ToDo Extract Logic to BLL and switch context out with UnitOfWork.
        //    private NotifyWebApiContext db = new NotifyWebApiContext();

        public IQueryable<TaskItemDto> GetTaskItems()
        {
            return db.TaskItems;
        }

        //    // GET: api/TaskItems/5
        //    [ResponseType(typeof(TaskItem))]
        //    public IHttpActionResult GetTaskItem(long id)
        //    {
        //        TaskItem taskItem = db.TaskItems.Find(id);
        //        if (taskItem == null)
        //        {
        //            return NotFound();
        //        }

        //        return Ok(taskItem);
        //    }

        //    // PUT: api/TaskItems/5
        //    [ResponseType(typeof(void))]
        //    public IHttpActionResult PutTaskItem(long id, TaskItem taskItem)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }

        //        if (id != taskItem.TaskId)
        //        {
        //            return BadRequest();
        //        }

        //        db.Entry(taskItem).State = EntityState.Modified;

        //        try
        //        {
        //            db.SaveChanges();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!TaskItemExists(id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return StatusCode(HttpStatusCode.NoContent);
        //    }

        //    // POST: api/TaskItems
        //    [ResponseType(typeof(TaskItem))]
        //    public IHttpActionResult PostTaskItem(TaskItem taskItem)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }

        //        db.TaskItems.Add(taskItem);
        //        db.SaveChanges();

        //        return CreatedAtRoute("DefaultApi", new {id = taskItem.TaskId}, taskItem);
        //    }

        //    // DELETE: api/TaskItems/5
        //    [ResponseType(typeof(TaskItem))]
        //    public IHttpActionResult DeleteTaskItem(long id)
        //    {
        //        TaskItem taskItem = db.TaskItems.Find(id);
        //        if (taskItem == null)
        //        {
        //            return NotFound();
        //        }

        //        db.TaskItems.Remove(taskItem);
        //        db.SaveChanges();

        //        return Ok(taskItem);
        //    }

        //    protected override void Dispose(bool disposing)
        //    {
        //        if (disposing)
        //        {
        //            db.Dispose();
        //        }

        //        base.Dispose(disposing);
        //    }

        //    private bool TaskItemExists(long id)
        //    {
        //        return db.TaskItems.Count(e => e.TaskId == id) > 0;
        //    }
    }
}