let amount_money = document.getElementById('total_amount').value;
        let tip_percentage = document.getElementById('total_per').value;

        const total = () =>{
           let amount_money = document.getElementById('total_amount').value;
           let tip_percentage = document.getElementById('total_per').value;
           let tip  = amount_money * (tip_percentage / 100);
           let total = tip + Number(amount_money);
           document.getElementById('tip_amount').value = tip;
           document.getElementById('tatal_bill').value = total;
        
           alert(`You will pay : ${total}`);
        
        }