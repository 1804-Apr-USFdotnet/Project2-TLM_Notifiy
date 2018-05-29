using Microsoft.VisualStudio.TestTools.UnitTesting;
using NotifyWebApi.BLL;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;
using NotifyWebApi.Repositories.Interfaces;
using NotifyWebApi.Models;

namespace NotifyWebApi.BLL.Tests
{
    [TestClass()]
    public class TaskBLTests
    {

        [TestMethod()]
        public void GetTaskItemsTest()
        {
            var userId = (long) 1;
            var fakeUnitOfWork = new Mock<IUnitOfWork>();
            fakeUnitOfWork.Setup(x => x.Tasks.GetAll()).Returns(new List<TaskItem>(){ new TaskItem(){UserId = userId}});

            var sut = new TaskBL(fakeUnitOfWork.Object);
            var results =sut.GetTaskItems(userId);
            var actualId = results.FirstOrDefault().UserId;
            var expectedId = userId;
            Assert.AreEqual(expectedId, actualId);
            //var tasks = _uoWork.Tasks.GetAll().Where(o => o.UserId == userId);
            //var dto = _mapper.Map<IEnumerable<TaskItem>, IEnumerable<TaskItemDto>>(tasks);
            //return dto;
        }

        [TestMethod()]
        public void GetTaskItemTest()
        {
            Assert.Fail();
        }

        [TestMethod()]
        public void PutTaskItemTest()
        {
            Assert.Fail();
        }

        [TestMethod()]
        public void PostTaskItemTest()
        {
            Assert.Fail();
        }

        [TestMethod()]
        public void DeleteTaskItemTest()
        {
            Assert.Fail();
        }
    }
}