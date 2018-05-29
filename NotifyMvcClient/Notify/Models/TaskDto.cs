using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace Notify.Models
{
    public class TaskDto
    {
        [Key]
        [HiddenInput(DisplayValue = false)]
        public long? TaskId { get; set; }
        [HiddenInput(DisplayValue = false)]
        public long? UserId { get; set; }

        [Required]
        [StringLength(60)]
        [Display(Name = "Note")]
        public string TaskTitle { get; set; }
        [StringLength(255)]
        [Display(Name = "Description")]
        public string TaskDescription { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Due")]
        [DisplayFormat(DataFormatString = "{0:dd-MMM-yyyy}")]
        public DateTime? DueDateTime { get; set; }
        [DataType(DataType.DateTime)]
        [HiddenInput(DisplayValue = false)]
        public DateTime? NotifyDateTime { get; set; }
        [DataType(DataType.Date)]
        [HiddenInput(DisplayValue = false)]
        public DateTime? CreatedDate { get; set; }
        [DataType(DataType.Date)]
        [HiddenInput(DisplayValue = false)]
        public DateTime? ModifiedDate { get; set; }

        [HiddenInput(DisplayValue = false)]
        public bool? HasDueDate { get; set; }
        [HiddenInput(DisplayValue = false)]
        public bool? HasNotifyDate { get; set; }
        [Display(Name = "Done")]
        public bool? IsCompleted { get; set; }
    }
}