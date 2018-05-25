using System;
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
    public class BillBL
    {
        //ToDo Extract Logic to BLL and switch context out with UnitOfWork.
        private static readonly MapperConfiguration Config = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<BillItem, BillItemDto>();
            cfg.CreateMap<BillItemDto, BillItem>();
            cfg.CreateMap<IEnumerable<BillItem>, List<BillItemDto>>();
        });


        private readonly IUnitOfWork _uoWork;

        private readonly IMapper _mapper = Config.CreateMapper();


        /// <summary>
        ///     Default parameterless constructor that sets the private field
        ///     IUnitOfWork to the application specific implementation: UnitOfWork.
        /// </summary>
        public BillBL()
        {
            _uoWork = new UnitOfWork();
        }

        /// <summary>
        ///     Parameterised version of the constructor that allows IUnitOfWork to be set to
        ///     a mock version.  This is the aspect that makes it testable without affecting the database.
        /// </summary>
        /// <param name="littleWorker"></param>
        public BillBL(IUnitOfWork littleWorker)
        {
            _uoWork = littleWorker;
        }


        public IEnumerable<BillItemDto> GetBillItems(long userId)
        {
            var bills = _uoWork.Bills.GetAll().Where(o => o.UserId == userId);
            var dto = _mapper.Map<IEnumerable<BillItem>, IEnumerable<BillItemDto>>(bills);
            return dto;
        }

        public BillItemDto GetBillItem(long userId, long billId)
        {
            var billItem = _uoWork.Bills.Get(billId);
            if (billItem.UserId == userId)
            {
                var dto = _mapper.Map<BillItem, BillItemDto>(billItem);
                return dto;
            }

            return null; //Controller will catch know and redirect to bad request.
        }


        public HttpStatusCode PutBillItem(BillItemDto billItemDto)
        {
            try
            {
                var billItem = _uoWork.Bills.Get((long)billItemDto.BillId);
                billItem = _mapper.Map(billItemDto, billItem);
                _uoWork.Bills.Update(billItem);
                _uoWork.Complete();
                return HttpStatusCode.NoContent; //No Content
            }
            catch (Exception e)
            {
                //todo implement logger
                return HttpStatusCode.InternalServerError;
            }
        }


        public long? PostBillItem(BillItemDto billItemDto)
        {
            var billItem = _mapper.Map<BillItemDto, BillItem>(billItemDto);
            try
            {
                _uoWork.Bills.Add(billItem);
                _uoWork.Complete();
                return null;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public int DeleteBillItem(long userId, long billId)
        {
            var billItem = _uoWork.Bills.Get(billId);
            if (billItem == null) return 404; //Not Found

            if (billItem.UserId == userId)
                try
                {
                    _uoWork.Bills.Remove(billItem);
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
