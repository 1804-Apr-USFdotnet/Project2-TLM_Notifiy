using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using NotifyWebApi.BLL.Models;
using NotifyWebApi.Models;
using NotifyWebApi.Repositories;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.BLL
{
    class TaskBL
    {
        //ToDo Extract Logic to BLL and switch context out with UnitOfWork.
        private static readonly MapperConfiguration config = new MapperConfiguration(cfg => {
            cfg.CreateMap<TaskItem, TaskItemDto>();
            cfg.CreateMap<TaskItemDto , TaskItem>();
            cfg.CreateMap<IEnumerable<TaskItem>, List<TaskItemDto>>();
        });

        readonly IMapper mapper = config.CreateMapper();


        private readonly IUnitOfWork _uoWork;


        /// <summary>
        /// Default parameterless constructor that sets the private field
        /// IUnitOfWork to the application specific implementation: UnitOfWork. 
        /// </summary>
        public TaskBL()
        {
            _uoWork = new UnitOfWork();
        }

        /// <summary>
        /// Parameterised version of the constructor that allows IUnitOfWork to be set to
        /// a mock version.  This is the aspect that makes it testable without affecting the database.
        /// </summary>
        /// <param name="littleWorker"></param>

        public TaskBL(IUnitOfWork littleWorker)
        {
            _uoWork = littleWorker;
        }

        public IEnumerable<TaskItemDto> GetTaskItems(long userId)
        {
            var tasks =_uoWork.Tasks.GetAll().Where(o=>o.UserId == userId);
            IEnumerable<TaskItemDto> dto = mapper.Map<IEnumerable<TaskItem>, IEnumerable<TaskItemDto>>(tasks);
            return dto;
        }

        public TaskItemDto GetTaskItem(long userId, long taskId)
        {

            TaskItem taskItem = _uoWork.Tasks.Get(taskId);
            if (taskItem.UserId == userId)
            {
                TaskItemDto dto = mapper.Map<TaskItem, TaskItemDto>(taskItem);
                return dto;
            }
            return null; //Controller will catch know and redirect to bad request.
        }

        // PUT: api/TaskItems/5
        public int PutTaskItem(TaskItemDto taskItemDto)
        {
            try
            {
                var taskItem = _uoWork.Tasks.Get(taskItemDto.TaskId);
                taskItem = mapper.Map<TaskItemDto, TaskItem>(taskItemDto, taskItem);
                _uoWork.Tasks.Update(taskItem);
                _uoWork.Complete();
                return 204;//No Content
            }
            catch (Exception e)
            {
                //todo implement logger
                return 500;
            }
            
            
        }

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

        // DELETE: api/TaskItems/5

        public int DeleteTaskItem(long userId, long taskId)
        {
            TaskItem taskItem = _uoWork.Tasks.Get(taskId);
            if (taskItem==null)
            {
                return 404;  //Not Found
            }
            if (taskItem.UserId == userId)
            {
                try
                {
                    _uoWork.Tasks.Remove(taskItem);
                    _uoWork.Complete();
                    return 204;
                }
                catch (Exception e)
                {
                    return 500;
                }
                
            }
            return 401; //Unauthorized
          
            //if (taskItem == null)
            //{
            //    return NotFound();
            //}

            //db.TaskItems.Remove(taskItem);
            //db.SaveChanges();

            //return Ok(taskItem);
        }

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