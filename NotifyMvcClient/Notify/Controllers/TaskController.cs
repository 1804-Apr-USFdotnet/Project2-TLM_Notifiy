using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Notify.Models;

namespace Notify.Controllers
{
    public class TaskController : AServiceController
    {
        // GET: Task
        public async Task<ActionResult> Index()
        {
            if (TempData.Peek("tok") == null || (string)TempData.Peek("tok") == "")
            {
                return RedirectToAction("Login", "Account");
            }
            string tok= (string) TempData.Peek("tok");
            ViewData["token"] = (string)("Bearer " + tok);
            ViewData["serviceUri"] = (string)serviceUri.ToString();
            IEnumerable<TaskDto> Task;
            var apiRequest = CreateRequestToService(HttpMethod.Get, "api/TaskItem");
            HttpResponseMessage apiResponse;
            try
            {
                apiResponse = await HttpClient.SendAsync(apiRequest);
            }
            catch
            {
                return View("Error");
            }

            if (!apiResponse.IsSuccessStatusCode) return View("Error");

            try
            {
                var content = await apiResponse.Content.ReadAsStringAsync();
                Task = JsonConvert.DeserializeObject<IEnumerable<TaskDto>>(content);
            }
            catch
            {
                return View("Error");
            }

            try
            {
                ViewData["UserId"] = Task.First().UserId;
            }
            catch
            {
                return RedirectToAction("Create");
            }
            

            return View(Task);
        }

        // GET: Task/Create
        public async Task<ActionResult> Create()
        {
            if (TempData.Peek("tok") == null || (string)TempData.Peek("tok") == "")
            {
                return RedirectToAction("Login", "Account");
            }
            return View();
        }

        // POST: Task/Create
        [HttpPost]
        public async Task<ActionResult> Create([Bind(Include = "TaskId,UserId,TaskTitle,TaskDescription,DueDateTime,NotifyDateTime,CreatedDate,ModifiedDate,HasDueDate,HasNotifyDate,IsCompleted")] TaskDto taskDto)
        {

            var apiRequest = CreateRequestToService(HttpMethod.Post, "api/TaskItem");
            apiRequest.Content = new ObjectContent<TaskDto>(taskDto, new JsonMediaTypeFormatter());
            HttpResponseMessage apiResponse;
            try
            {
                apiResponse = await HttpClient.SendAsync(apiRequest);

            }
            catch
            {

                return View("Error");
            }

            if (!apiResponse.IsSuccessStatusCode) return View("Error");

            return RedirectToAction("Index", "Task");
        }

        // GET: Task/Delete/5
        public async Task<ActionResult> Delete(int id)
        {
            var apiRequest = CreateRequestToService(HttpMethod.Delete, "api/TaskItem/"+id);
            HttpResponseMessage apiResponse;
            try
            {
                apiResponse = await HttpClient.SendAsync(apiRequest);
            }
            catch
            {
                return View("Error");
            }
            return RedirectToAction("Index", "Task");
        }

    }
}
