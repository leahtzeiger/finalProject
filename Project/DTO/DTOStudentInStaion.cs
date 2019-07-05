using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class DTOStudentInStaion
    {
        public DTOStudentInStaion()
        {

        }
        public int studentInStationId { get; set; }
        public int statoinId { get; set; }
        public Nullable<System.DateTime> fromDate { get; set; }
        public Nullable<System.DateTime> toDate { get; set; }
        public int studentId { get; set; }

    }
}
