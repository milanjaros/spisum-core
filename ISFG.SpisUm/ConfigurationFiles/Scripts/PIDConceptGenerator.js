﻿var prefixString = "$_REPLACE_PidPrefix";
var numberLength = $_REPLACE_PidLength;

var runScript = !document.properties["ssl:pid"]
    && document.typeShort == "ssl:concept";

if (runScript) {
    var pidCounterId = 0;

    if (!companyhome.hasAspect("ssl:pid_concept_counter")) {
        var props = new Array(1);
        props["ssl:pid_concept_counter_value"] = pidCounterId;
        companyhome.addAspect("ssl:pid_concept_counter", props);
        companyhome.save();
    }

    pidCounterId = parseInt(companyhome.properties["ssl:pid_concept_counter_value"]);

    while (true) {
        pidCounterId++;
        companyhome.properties["ssl:pid_concept_counter_value"] = pidCounterId;
        companyhome.save();

        var pid = generatePid(pidCounterId);

        var result = search.query({ query: "=ssl\\:pid:'" + pid + "'", language: "fts-alfresco" });

        if (result != "") {
            continue;
        }

        document.properties["ssl:pid"] = pid;
        document.save();

        break;
    }
}

function generatePid(count) {
    var result = count.toString();

    for (var i = result.length; i < numberLength; i++) {
        result = "0" + result;
    }

    return prefixString + result;
}