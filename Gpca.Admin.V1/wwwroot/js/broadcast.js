"use strict";

var connection = new signalR.HubConnectionBuilder()
    .withUrl("/broadcastHub")
    .withAutomaticReconnect()
    .build();

connection.on("ReceiveMessage", function (user, message) {

    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    console.log("Message: " + msg);
    console.log("User: " + user);
    //var pollResultMsg = user + " votou em '" + myChannelVal + "'.";

    //var ulPoll = document.getElementById("messagesList");
    //var liPollResult = document.createElement("li");
    //liPollResult.textContent = pollResultMsg;

    //ulPoll.insertBefore(liPollResult, ulPoll.childNodes[0]);

    //document.getElementById(myChannelId + 'Block').innerHTML += chartBlock;
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});


// pegar evento do botão de gerar reltório
var InvokeMessage = function (user, message) {
    //var user = document.getElementById("userInput").value;
    //var message = "";

    //if (!user) {
    //    user = "[Anônimo]";
    //}

    //if ($('input:radio[name=myChannel]').is(':checked')) {
    //    var myChannelId = $('input[name=myChannel]:checked').attr('id');
    //    var myChannelVal = $('input[name=myChannel]:checked').val();
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    //} else {
    //    return console.log("Não possui nenhum tipo de votação selecionado.");
    //}

    //event.preventDefault();
};