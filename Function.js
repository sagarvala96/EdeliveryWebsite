    // URl of user website

    exports.baseURL = function baseURL() {
        var baseURL = "https://webappedeliverynew.appemporio.net/";

        //var baseURL = "https://restomi.fr/";
        
        return baseURL;
    }

    // user's email address

    exports.user_email = function user_email() {
        var user_email = "apioxbsq@gmail.com";

        //var user_email = "s@p.in";
    
        return user_email;
    }

    // User's password

    exports.user_password = function user_password() {
        var user_password = "123456";

        //var user_password = "111111";
    
        return user_password;
    }

    // Store name for create order 

    exports.store_name = function store_name() {
         var store_name = "Fortune";
    
        //var store_name = "Smith kitchen";

        return store_name;
    }

    // Address for store

    exports.address = function address() {
        var address = "Rajkot, Gujarat 360001, India";

        //var address = "Paris, France";
    
        return address;
    }

    // Resolution 

    exports.resolution = function resolution() {

        var resolution = 'macbook-15'
       // var resolution = 'macbook-13'
       // var resolution = 'macbook-11'
       // var resolution = 'ipad-2'
       // var resolution = 'ipad-mini'
       // var resolution = 'iphone-xr'
       // var resolution = 'iphone-x'
       // var resolution = 'iphone-se2'
       // var resolution = 'iphone-6+'
       // var resolution = 'iphone-6'
      
       return resolution;
   }

   // cash order

   exports.is_cash_order = function is_cash_order() {
    
    var is_cash_order = true;
    
    return is_cash_order;
}

   // If you want to place pickup order

    exports.is_pickup = function is_pickup() {
    
        var is_pickup = false;
       
        return is_pickup;
    }

    // Normal order

    exports.is_normal = function is_normal() {
    
        var is_normal = true;
        
        return is_normal;
    }

    // IF you want to schedule pickup order

    exports.is_pickup_schedule = function is_pickup_schedule() {
    
        var is_pickup_schedule = false;

        return is_pickup_schedule;
    }

    exports.wait = function wait() {
    
        var wait = 3000;
       
        return wait;
    }

    exports.string = function string() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }

    exports.email = function email() {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text + '@gmail.com';
    }
    
    exports.number = function number() {
        var text = "";
        var possible = "1234567890"
      
            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
      
            return text;
    }
  