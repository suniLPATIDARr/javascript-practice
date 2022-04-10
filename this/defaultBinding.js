// default binding if none of the other rules are matched
// order of precedence new>explicit>implicit>default
function person() {
    // this={}
    console.log(this.name)
}
globalThis.name = "Minal"
person();