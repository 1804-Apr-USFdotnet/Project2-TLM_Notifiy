using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotifyWebApi.Models
{
    public class BillItem
    {
        public int BillId { get; set; }
        public int UserId { get; set; }

        [Required]
        [StringLength(60, ErrorMessage = "Name of bill holder should be 60 characters or less.")]
        public string BillHolder { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        public decimal AmountOwed { get; set; }
        public bool Paid { get; set; }
        public bool Automatic { get; set; }
        [StringLength(255, ErrorMessage = "Description too long.")]
        public string Description { get; set; }
    }
}
