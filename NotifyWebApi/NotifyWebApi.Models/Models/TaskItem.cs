using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotifyWebApi.Models
{
    public class TaskItem
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long TaskId { get; set; }
        [Required]
        public long UserId { get; set; }

        [Required][StringLength(60)]
        public string TaskTitle { get; set; }
        [StringLength(255)]
        public string TaskDescription { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? DueDateTime { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? NotifyDateTime { get; set; }
        [DataType(DataType.Date)]
        public DateTime? CreatedDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime? ModifiedDate { get; set; }

        public bool? HasDueDate { get; set; }
        public bool? HasNotifyDate { get; set; }
        public bool? IsCompleted { get; set; }

        public virtual EfUser EfUser { get; set; }
    }
}