import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            form: {
                name: '',
                point: 150,
                bet: 1000,
            }
        };
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }
    changeVal(name, e) {
        let val = e.target.value;
        this.setState(state => (state.form[name] = val, state))
    }
    show() {
        this.setState({ show: true })
    }
    hide() {
        this.setState({ show: false })
    }
    createTable() {
        this.props.Game.join('domino', { create: true, key: this.props.key, ...this.state.form });
    }
    render() {
        return (
            <Modal onHide={() => this.hide()} show={this.state.show} id="create-table" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-header">ایجاد میز</div>
                <div class="modal-body">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">نام میز</span>
                        </div>
                        <input type="text" onChange={(v) => this.changeVal('name', v)} value={this.state.form.name} class="form-control" />
                    </div>
                    <div class="input-group" >
                        <div class="input-group-prepend">
                            <span class="input-group-text">راند</span>
                        </div>
                        <select onChange={(v) => this.changeVal('point', v)} value={this.state.form.point} class="form-control">
                            <option value="150">150</option>
                            <option value="250">250</option>
                            <option value="350">350</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">شرط</span>
                        </div>
                        <select onChange={(v) => this.changeVal('bet', v)} value={this.state.form.bet} class="form-control">
                            <option value="1000">1,000</option>
                            <option value="2000">2,000</option>
                            <option value="5000">5,0000</option>
                            <option value="10000">10,000</option>
                            <option value="20000">20,000</option>
                            <option value="50000">50,000</option>
                            <option value="100000">100,000</option>
                        </select>
                    </div>
                    <button class="btn" onClick={() => this.createTable()}>شروع</button>
                    <button class="btn close" onClick={() => this.hide()}>انصراف</button>
                </div>
            </Modal>
        );
    }
}

export default Create;