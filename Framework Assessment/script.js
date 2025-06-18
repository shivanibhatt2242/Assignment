$(document).ready(function() {
    
    $(".datepicker").datepicker({
        dateFormat: 'mm/dd/yy'
    });


    $("#calculate").on("click", function() {
        const fromDateStr = $("#fromDate").val();
        const toDateStr = $("#toDate").val();

        if (fromDateStr && toDateStr) {
            const fromDate = new Date(fromDateStr);
            const toDate = new Date(toDateStr);

            if (fromDate > toDate) {
                alert("'From' date cannot be after 'To' date.");
                return;
            }

            
            const diffTime = Math.abs(toDate - fromDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          
            const diffWeeks = Math.floor(diffDays / 7);

      
            let years = toDate.getFullYear() - fromDate.getFullYear();
            let months = toDate.getMonth() - fromDate.getMonth();
            if (toDate.getDate() < fromDate.getDate()) {
                months--;
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            const totalMonths = years * 12 + months;

       
            const resultHtml = `
                <p><b>Date interval between ${fromDateStr} and ${toDateStr}</b></p>
                <p>In years: ${years}</p>
                <p>In months: ${totalMonths}</p>
                <p>In weeks: ${diffWeeks}</p>
                <p>In days: ${diffDays}</p>
            `;

           
            $("#result").html(resultHtml).show();
        } else {
            alert("Please select both dates.");
        }
    });
});