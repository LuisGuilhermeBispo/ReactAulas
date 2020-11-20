import React from 'react';

import qrCodeService from '../../services/QrCodeService';

class QrCodeComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // Atributo para armazenar o array de posts vindos da API.
            posts: [],
        }

    }

    componentDidMount() {
        // this.loadTeste()
    }

    loadTeste(){
        try {
            let res = qrCodeService.testData()
            res.then(v => {
                console.log(v.data);
                let html = `<a href="${v.data}" download><img src="${v.data}"></a>`

                container.innerHTML = html
            })
            console.log(res);
            let container = document.getElementById('qrcontainer')
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {

        return (
            <div>
                <h1>Admin Page</h1>
                <button onClick={() => this.loadTeste()}>Generate QRCode</button>
                <div id="qrcontainer"></div>
            </div>
        )
    }
}

export default QrCodeComponent;