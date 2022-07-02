function solve() {
    let showStop = document.querySelector(`#info span`);
    let departBtn = document.getElementById(`depart`);
    let arriveBtn = document.getElementById(`arrive`);

    let stopurl = {
        next: `depot`,
        name: `depot`
    }
    const url = `http://localhost:3030/jsonstore/bus/schedule/`;

    async function depart() {
        const result = await fetch(url);
        stop = await result.json();
        showStop.textContent = `Next stop ${stop[stopurl.next].name}`
        stopurl.next = stop[stopurl.next].next;
        stopurl.name = stop[stopurl.next].name;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        showStop.textContent = ` Arriving at ${stopurl.name}`
        console.log(stopurl);


    }

    return {
        depart,
        arrive
    };
}

let result = solve();