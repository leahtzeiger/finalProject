//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class StudentInBu
    {
        public int StudentInBusId { get; set; }
        public int busId { get; set; }
        public int studentId { get; set; }
        public Nullable<int> index { get; set; }
        public Nullable<bool> didCome { get; set; }
    
        public virtual Bus Bus { get; set; }
        public virtual Student Student { get; set; }
    }
}
