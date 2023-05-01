$(document).ready(function(){
    let MenuItem = document.getElementsByClassName('menuItem');
    MenuItem[0].classList.add('active-menuItem');

    function  renderOrderRows(rowData){
        let id = $('<td>').html(rowData.id);
        let customer = $('<td>').html(rowData.customerName).attr('class','primary-text');
        let time = $('<span>').html(rowData.orderTime);
        let formatDate = rowData.orderDate.split('-');
        let date = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class','primary-text');
        date.append(time);
        let amount = $('<td>').html("$" + rowData.amount);
        let status = $('<td>').html(rowData.orderStatus).attr('class','primary-text');
        let tr = $('<tr>').append(id,customer,date,amount,status);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders',function(orderData){
        console.log(orderData)
        for(let i = 0; i<orderData.length;i++){
            $('#orderRows').append(renderOrderRows(orderData[i]));
        }
    })
    let rowCounter = document.getElementById('rowCount');
    let newOrder = document.getElementsByName('ordersNew');
    newOrder[0].onclick = function(){
        let table = document.getElementById('orderRows')
        let userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            let td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                let tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'NEW'){
                    if(newOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        let rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    let packedOrder = document.getElementsByName('ordersPacked');
    packedOrder[0].onclick = function(){
        let table = document.getElementById('orderRows')
        let userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            let td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                let tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'PACKED'){
                    if(packedOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        let rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    let inTransitOrder = document.getElementsByName('ordersIntransit');
    inTransitOrder[0].onclick = function(){
        let table = document.getElementById('orderRows')
        let userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            let td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                let tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'INTRANSIT'){
                    if(inTransitOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        let rowCount = 0;
        for(j = 0;j<useletrRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    let deliveredOrder = document.getElementsByName('ordersDelivered');
    deliveredOrder[0].onclick = function(){
        let table = document.getElementById('orderRows')
        let userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            let td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                let tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'DELIVERED'){
                    if(deliveredOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        let rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }
})
