using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class DTOStudentInBus
    {
        public DTOStudentInBus()
        {

        }
        public int StudentInBusId { get; set; }
        public int busId { get; set; }
        public int studentId { get; set; }
        public Nullable<int> index { get; set; }
        public Nullable<bool> didCome { get; set; }

    }
}
