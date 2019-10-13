/*

Requirements:
The controls should be interesting and not simplistic. A label is simplistic, for example.
Change properties of each control from the defaults. Do something visual and note what you changed for each control in a label on your form (so I don't overlook it). 
For example, if you make something blue, say so in the label.
Attach one event to each control, and write an event handler - you can just output a message using a simple popup like NSB.MsgBox().


*/

cdProfile.onclick=function(){
  lblDescription.value = "You're looking at Max's/Connor's profile"
}

cbNationality.onclick = function() {
    let names = ["Max","Connor"]
    let countries = ["Belgium","USA"]
    let message = "";
    for (i = 0; i <= cbNationality.length - 1; i++) {
        if (cbNationality.getValue(i)) {
            message = `${names[i]} is from ${countries[i]}`
        }
    }
    NSB.MsgBox(message);
};
