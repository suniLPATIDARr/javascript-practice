// default binding if none of the other rules are matched
function person() {
    // this={}
    console.log(this.name)
}
globalThis.name = "Minal"
person();