        // var age = 20;
        // age += 10;
        // console.log('Age ' + age);

        // age = age - 5;
        // console.log('Age ' + age);
        // var x = age * 3;
        // console.log('Value of x ' + x);

        // var div = 100/10;
        // console.log('div' , div);

        // // if(5 == '5'){
        // //     console.log('This is equal');
        // // } else {
        // //     console.log('Not equal');

        // // }
        var y = '';

        if(y.trim()){
            console.log('It has a value')
        } else {
            console.log('Empty')
        }



        // if(true && false){
        //     console.log('if condition of &&');
        // } else {
        //     console.log('else condition of &&');
        // }

        // if(true || false){
        //     console.log('if condition of ||');
        // } else {
        //     console.log('else condition of ||');
        // }

        // if(age){
        //     console.log('It has a value');
        // } else {
        //     console.log('no value its empty');
        // }

        // var test = "This is my text value";
        // if(test.indexOf('ish') != -1){
        //     console.log('The value matches' + test.indexOf('ish'))
        // } else {
        //     console.log('Not found' + test.indexOf('ish'));
        // }

        var cars = ['Honda', 'Tesla', 'Kia', 'Audi'];
        // for(i=0; i <=cars.length - 1; i++){
        //     console.log(cars[i]);
        // }

        for(let car in cars){
            console.log(cars[car]);
        }

        var abc =10
        do {
            abc++;
            console.log('Hello there');
        }
        while(abc <5 );
        // console.log(cars);
        // console.log(cars.length)
        // cars[cars.length] = 'Ford';
        // cars.push('Test', 'Sam');

        // var car_names = new Array('Accord', 'Civic');
        // console.log(car_names);

        function diplayName(name , marks){
            console.log("Hello " + name + " . How are you?")
            if(marks > 90) {
                console.log("You got A+ ")
            } else if(marks > 80) {
                console.log("You got B+ ")
            } else {
                console.log("You got C")
            }
        }

        diplayName('Harsh', 95);
        diplayName('Caden', 88);
        diplayName('Charles', 79);