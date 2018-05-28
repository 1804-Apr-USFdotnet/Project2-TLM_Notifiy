using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Notify.Controllers
{
    public class AccountController : AServiceController
    {
        // GET: Account
        public async Task<ActionResult> Login()
        {
            return View();
        }

        public async Task<ActionResult> Register()
        {
            return View();
        }

        public async Task<ActionResult> Parse(string parse)
        {
            TempData["tok"] = parse;
            return RedirectToAction("Index", "Task");
        }
        public async Task<ActionResult> Logout()
        {

            TempData["tok"] = "";

            var apiRequest = CreateRequestToService(HttpMethod.Post, "api/Account/Logout");
            HttpResponseMessage apiResponse;
            try
            {
                apiResponse = await HttpClient.SendAsync(apiRequest);
            }
            catch
            {
                return View("Error");
            }

            return RedirectToAction("Login", "Account");
        }
    }
}