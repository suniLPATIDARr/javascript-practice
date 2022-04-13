function student(fname, lname, sub) {
    this.fname = fname;
    this.lname = lname;
    this.sub = sub;
}

const greet = function (prefix) {
    console.log(prefix, '', this.fname, ' ', this.lname)
}
let st1 = new student('vipin', 'pal', 'boxing');
let st2 = new student('priya', 'agarwal', 'BA');

greet.call(st1, 'Mr.')
function employe(fname, lname, sub) {
    this.fname = fname;
    this.lname = lname;
    this.sub = sub;
}

let em1 = new employe('sudhanta', 'singh', 'design');
greet.apply(em1, ['Sir']);

const fn = greet.bind(st2)
fn('Mr.')


