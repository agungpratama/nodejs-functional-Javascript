function getShortMessages(messages) {
    var returnedMessages = [];
    var filteredMessages = messages.filter(function(item){
        return item.message.toString().length < 50;
    });
    filteredMessages.map(function(item){
       returnedMessages.push(item.message.toString());
    });
    return returnedMessages;
}

module.exports = getShortMessages;

