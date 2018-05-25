using NotifyWebApi.BLL;
using NotifyWebApi.Models;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace NotifyWebApi.Controllers
{
    [Authorize]
    public class BillItemController : ApiController
    {
        private readonly BillBL _bl = new BillBL();

        // GET: api/BillItems
        [ResponseType(typeof(BillItemDto))]
        public IHttpActionResult GetBillItems()
        {
            var request = _bl.GetBillItems(GetCurrentUserId());
            return Ok(request);
        }

        // GET: api/BillItems/1
        [ResponseType(typeof(BillItemDto))]
        public IHttpActionResult GetBillItem(long id)
        {
            var result = _bl.GetBillItem(GetCurrentUserId(), id);

            if (result == null) return NotFound();

            return Ok(result);
        }


        // PUT: api/BillItems/2
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBillItem(long id, BillItemDto billItemDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (id != billItemDto.BillId) return BadRequest();
            var currentUserId = GetCurrentUserId();
            var nullCheck = _bl.GetBillItem(currentUserId, id);
            if (nullCheck == null) return NotFound();

            if (currentUserId != billItemDto.UserId) return Unauthorized();

            _bl.PutBillItem(billItemDto);

            return StatusCode(HttpStatusCode.NoContent);
        }


        // POST: api/BillItems
        [ResponseType(typeof(BillItemDto))]
        public IHttpActionResult PostBillItem(BillItemDto billItemDto)
        {
            //billItemDto.UserId = null;  //might have to change the DTO model to reflect this
            billItemDto.UserId = GetCurrentUserId();


            //ModelState["billItemDto.UserId"].Errors.Clear();
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var billId = _bl.PostBillItem(billItemDto); //todo get id logic

            return CreatedAtRoute("DefaultApi", billId, billItemDto);
        }


        // DELETE: api/BillItems/2
        [ResponseType(typeof(BillItemDto))]
        public IHttpActionResult DeleteBillItem(long id)
        {
            var currentUserId = GetCurrentUserId();
            var nullCheck = _bl.GetBillItem(currentUserId, id);
            if (nullCheck == null) return NotFound();

            _bl.DeleteBillItem(currentUserId, id);

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
        

        private long GetCurrentUserId()
        {
            var email = User.Identity.Name;
            return Associator.ConvertToId(email);
        }

    }
}