using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Mvc;


namespace Notify.Controllers
{
    public abstract class AServiceController : Controller
    {
        protected static readonly HttpClient HttpClient = new HttpClient(new HttpClientHandler() { UseCookies = false });
        protected static readonly Uri serviceUri = new Uri("http://localhost:52739/");
        private static readonly string tokenName = "accessToken";
        //protected static string token = "8CTZgLKrRQeGEuTSZiWe40MlN9RmOk9e0ozAEjbnnogtcrzXOgIpAxewLW1SZ1etp73OcmHcyhHAzWwXgVku7WXgD6varmn_D6rkhoABvrN3IRzwkscaWprxT6xkWI3CS0nukbgBeugb-7UR3s8Qd3qKgn9eRQPLV6W_C0oa0rjkvFH-NMAtsh4eWobMdA6aThaySH8EPp9djQZmjPqn5i5DpdL1Hea8nATzkWHysrAVwlTu2g0H1cDFOv2B0eVTlNy3yFkhKvZ7fdaJ1GRI1og8TnT8iKqhXMueEjFLYlI4atZipi--__YI8tD0Gc7irT-zehzEjceTvwcH6j9UFJKR7Ihwt_2GclTQpQcKJDCvExcDwOYHyvzknuzGt5uF0IvlUOtNBj4rPn6JdG_Wwsdjo2sAHg4FgkcHSoWTspd1Yxxs0XPexwt0OS3HslCQOMHdgxkL5jJz1MeQpih4l0X9FD62ehtCYharXsdFCrLnVKSgGjhPBEqgRsPhhqRq";

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