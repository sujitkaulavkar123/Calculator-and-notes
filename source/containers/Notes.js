import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, Keyboard, Text } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { submitNote, filterNotes } from '../redux/notesReducer';
import Note from '../components/Note';

class Notes extends Component {

    constructor() {
        super()
        this.state = {
            notesTitle: '',
            notesStatus: '',
            selectedFilter: 'All'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                    <CustomTextInput placeholder='Note Title' value={this.state.notesTitle} onChangeText={text => {
                        this.setState({
                            notesTitle: text
                        })
                    }} />

                    <CustomTextInput placeholder='Note Status' value={this.state.notesStatus} onChangeText={text => {
                        this.setState({
                            notesStatus: text
                        })
                    }} />

                    <CustomButton buttonContainer={styles.resetButton} title='Add Note' buttonAction={() => {
                        if (this.state.notesTitle.length && this.state.notesStatus.length) {

                            Keyboard.dismiss()
                            this.setState({
                                notesTitle: '',
                                notesStatus: '',
                                selectedFilter: 'All'
                            })

                            this.props.addNote({
                                title: this.state.notesTitle,
                                status: this.state.notesStatus
                            })
                        }
                    }} />
                </View>

                <View style={styles.filterButttons}>
                    <CustomButton buttonContainer={styles.filterButton} title='All' selected={this.state.selectedFilter} buttonAction={() => {
                        this.setState({
                            selectedFilter: 'All'
                        })
                        this.props.filterAllNotes('All')
                    }} />
                    <CustomButton buttonContainer={styles.filterButton} title='Active' selected={this.state.selectedFilter} buttonAction={() => {
                        this.setState({
                            selectedFilter: 'Active'
                        })
                        this.props.filterAllNotes('Active')
                    }} />
                    <CustomButton buttonContainer={styles.filterButton} title='Completed' selected={this.state.selectedFilter} buttonAction={() => {
                        this.setState({
                            selectedFilter: 'Completed'
                        })
                        this.props.filterAllNotes('Completed')
                    }} />
                </View>

                <View style={{ flex: 1, marginTop: 15, width: '100%', borderTopColor: 'gray', borderWidth: 1 }}>
                    <Note item={{
                        item: {
                            title: 'Title',
                            status: 'Status',
                            header: true
                        }
                    }} />
                    <FlatList
                        data={this.props.notes}
                        extraData={this.props.notes}
                        keyExtractor={(item) => item.title}
                        renderItem={item => <Note item={item} />}
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.filterNotes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote(note) {
            dispatch(submitNote(note))
        },
        filterAllNotes(type) {
            dispatch(filterNotes(type))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    resetButton: {
        backgroundColor: '#32CD32',
        width: 100
    },
    filterButttons: {
        flexDirection: 'row',
    },
    filterButton: {
        width: 100,
        borderColor: 'transparent',
    },
    cell: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'gray',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);