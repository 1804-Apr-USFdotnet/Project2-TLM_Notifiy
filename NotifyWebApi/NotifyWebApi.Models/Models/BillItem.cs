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
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long BillId { get; set; }
        [Required]
        public long UserId { get; set; }
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
        
        public virtual EfUser EfUser { get; set; }
    }
}
