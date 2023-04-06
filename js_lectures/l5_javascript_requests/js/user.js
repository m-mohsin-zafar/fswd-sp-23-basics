class User {
    constructor(name, role){
        this.name = name;
        this.role = role;
    }

    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get Role() {
        return this.role;
    }

    set Role(role) {    
        this.role = role;
    }
}

class AdminUser extends User {
    constructor(name, role) {
        super(name, role)
        this.guy = 'Admin';
    }
}

export {User, AdminUser};