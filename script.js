agent={
    fetchAgent : function(txt) {
        fetch("https://valorant-api.com/v1/agents/"+txt)
        .then((response) => response.json())
        .then((data) => this.displayAgent(data));
    },
    displayAgent : function(data){
        const { displayName, description, fullPortrait } = data.data;
        const { displayIcon } = data.data.role;
        console.log(fullPortrait);
        document.querySelector(".name").innerHTML = displayName;
        document.querySelector(".desc").innerHTML = description;
        document.querySelector(".fullPortrait").src= fullPortrait;
        document.querySelector(".displayIcon").src = displayIcon;
    }
}

document.querySelector("#agent").addEventListener('change', function() {
    agent.fetchAgent(this.value);
  });