renderActiveComp();

function renderActiveComp() {
    // render comp out
    var location = "C:/Users/Natel/Desktop/Renders/";
    var comp = app.project.activeItem;
    var rqItem = app.project.renderQueue.items.add(comp);
    var module = rqItem.outputModule(1);
    module.applyTemplate("MOV Cineform Q5");
    var thisExtension = "." + module.file.fsName.split(".")[1];
    module.file = File(location+comp.name);
    app.project.renderQueue.render();

    // ffmpeg call
    var pathToFFMPEG;
    
    pathToFFMPEG = $.fileName.slice(0, $.fileName.lastIndexOf("/"));
    pathToFFMPEG+="/ffmpeg.exe";
    
    
    system.callSystem('\"'+File(pathToFFMPEG).fsName.replace(/%20/g, " ")+'\" -i \"'+(location+comp.name+thisExtension)+'\" \"'+location+comp.name+'.mp4\"');

    // remove ae rendered file
    File(location+comp.name+thisExtension).remove();
    
}