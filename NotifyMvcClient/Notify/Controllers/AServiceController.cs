using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Mvc;


namespace Notify.Controllers
{
    public abstract class AServiceController : Controller
    {
        protected static readonly HttpClient HttpClient = new HttpClient(new HttpClientHandler() { UseCookies = false });
        protected static readonly Uri serviceUri = new Uri("172.31.39.15/NotifyWebApi/");
        private static readonly string tokenName = "accessToken";

        protected HttpRequestMessage CreateRequestToService(HttpMethod method, string uri)
        {
            string token = (string) TempData.Peek("tok");
            var apiRequest = new HttpRequestMessage(method, new Uri(serviceUri, uri));
            apiRequest.Headers.Clear();
            apiRequest.Headers.Add("Authorization", "Bearer " + token);
            apiRequest.Headers.Add("Accept", "application/json");

            return apiRequest;
        }
    }
}