using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotifyWebApi.BLL.Models
{
    class TaskItemDto
    {

        public int TaskId { get; set; }
        public int UserId { get; set; }

        [Required]
        [StringLength(60)]
        public string TaskTitle { get; set; }
        [StringLength(255)]
        public string TaskDescription { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime DueDateTime { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime NotifyDateTime { get; set; }
        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime ModifiedDate { get; set; }

        public bool HasDueDate { get; set; }
        public bool HasNotifyDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
