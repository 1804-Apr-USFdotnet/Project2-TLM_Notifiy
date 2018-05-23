using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotifyWebApi.Models
{
    public class EfUser
    {
        public EfUser()
        {
            Tasks = new  HashSet<TaskItem>();
            Bills = new HashSet<BillItem>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long UserId { get; set; }
        [Required][DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public virtual ICollection<TaskItem> Tasks { get; set; }
        public virtual ICollection<BillItem> Bills { get; set; }
    }
}
