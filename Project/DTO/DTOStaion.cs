using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOStaion
    {
        public DTOStaion()
        {

        }
        public int StationId { get; set; }
        public string StationName { get; set; }
        public decimal lat { get; set; }
        public decimal lng { get; set; }
    }
}
