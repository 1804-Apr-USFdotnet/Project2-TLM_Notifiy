using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotifyWebApi.DAL.Models
{
    [Table("BillItems", Schema = "Items")]
    class BillItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BillID { get; set; }
        [Required]
        public int UserID { get; set; }
        [Required]
        public string BillHolder { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        public decimal AmountOwed { get; set; }
        public bool Paid { get; set; }
        public bool Automatic { get; set; }
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }
    }
}
