include(["Functions", "Engines", "Wine"]);
include(["Functions", "Net", "Resource"]);
include(["Functions", "Filesystem", "Files"]);
include(["Functions", "Verbs", "luna"]);

Wine.prototype.vcrun2003 = function() {
    var setupFile = new Resource()
        .wizard(this._wizard)
        .url("https://sourceforge.net/projects/bzflag/files/bzedit%20win32/1.6.5/BZEditW32_1.6.5.exe")
        .checksum("bdd1b32c4202fd77e6513fd507c8236888b09121")
        .name("BZEditW32_1.6.5.exe")
        .get();

    this.run(setupFile, "/S")
        .wait("Please wait while {0} is installed ...".format("Microsoft Visual C++ 2003 Redistributable (x86)"));

    var dlls = [
        "msvcp71.dll",
        "mfc71.dll"
    ];
    dlls.forEach(function (dll) {
        cp(wine.programFiles() + "/BZEdit1.6.5/" + dll, this.system32directory());
    });


    return this;
};
