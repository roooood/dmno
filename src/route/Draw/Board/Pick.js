import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import autoBind from 'react-autobind';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        autoBind(this);
    }

    show() {
        this.setState({ show: true })
    }
    hide() {
        this.setState({ show: false })
    }
    picked(i) {
        this.props.Game.send({ pick: i });
        this.hide();
    }
    pick() {
        this.show();
    }
    componentDidMount() {
        this.props.Game.register('pick', this.pick);
    }
    render() {
        return (
            <Modal dialogClassName="modal-pick" show={this.state.show} id="create-table" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-header">یک مهره بردارید</div>
                <div class="modal-body">
                    <div class="simi-holder">
                        {
                            this.props.simi.map((s, i) => {
                                return (
                                    <div
                                        className={'simi ' + (s ? '' : 'empty')}
                                        onClick={() => s ? this.picked(i) : null}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Create;