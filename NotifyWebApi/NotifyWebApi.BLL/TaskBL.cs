﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using AutoMapper;
using NotifyWebApi.BLL.Models;
using NotifyWebApi.Models;
using NotifyWebApi.Repositories;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.BLL
{
    public class TaskBL
    {

        private static readonly MapperConfiguration Config = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TaskItem, TaskItemDto>();
            cfg.CreateMap<TaskItemDto, TaskItem>();
            cfg.CreateMap<IEnumerable<TaskItem>, List<TaskItemDto>>();
        });


        private readonly IUnitOfWork _uoWork;

        private readonly IMapper _mapper = Config.CreateMapper();


        /// <summary>
        ///     Default parameterless constructor that sets the private field
        ///     IUnitOfWork to the application specific implementation: UnitOfWork.
        /// </summary>
        public TaskBL()
        {
            _uoWork = new UnitOfWork();
        }

        /// <summary>
        ///     Parameterised version of the constructor that allows IUnitOfWork to be set to
        ///     a mock version.  This is the aspect that makes it testable without affecting the database.
        /// </summary>
        /// <param name="littleWorker"></param>
        public TaskBL(IUnitOfWork littleWorker)
        {
            _uoWork = littleWorker;
        }


        public IEnumerable<TaskItemDto> GetTaskItems(long userId)
        {
            var tasks = _uoWork.Tasks.GetAll().Where(o => o.UserId == userId);
            var dto = _mapper.Map<IEnumerable<TaskItem>, IEnumerable<TaskItemDto>>(tasks);
            return dto;
        }

        public TaskItemDto GetTaskItem(long userId, long taskId)
        {
            var taskItem = _uoWork.Tasks.Get(taskId);
            if (taskItem == null) return null;
            if (taskItem.UserId == userId)
            {
                var dto = _mapper.Map<TaskItem, TaskItemDto>(taskItem);
                return dto;
            }

            return null; //Controller will catch know and redirect to bad request.
        }


        public HttpStatusCode PutTaskItem(TaskItemDto taskItemDto)
        {

            try
            {
                var taskItem = _uoWork.Tasks.Get((long)taskItemDto.TaskId);
                taskItemDto.CreatedDate = taskItem.CreatedDate;  //Reset to orginal value.
                taskItemDto.ModifiedDate = DateTime.Now;  //Set Modified Date
                taskItem = _mapper.Map(taskItemDto, taskItem);
                _uoWork.Tasks.Update(taskItem);
                _uoWork.Complete();
                return HttpStatusCode.NoContent; //No Content
            }
            catch (Exception e)
            {
                //todo implement logger
                return HttpStatusCode.InternalServerError;
            }
        }


        public long? PostTaskItem(TaskItemDto taskItemDto)
        {
            var taskItem = _mapper.Map<TaskItemDto, TaskItem>(taskItemDto);
            taskItem.CreatedDate = DateTime.Now;  //Set Created Date
            try
            {
                _uoWork.Tasks.Add(taskItem);
                _uoWork.Complete();
                return null;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public int DeleteTaskItem(long userId, long taskId)
        {
            var taskItem = _uoWork.Tasks.Get(taskId);
            if (taskItem == null) return 404; //Not Found

            if (taskItem.UserId == userId)
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

            return 401; //Unauthorized
        }
    }
}