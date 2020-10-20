import React from 'react';
import ReactDOM from 'react-dom';
import { Dynamic } from '@ekuaibao/template'
import { createForm } from 'rc-form'

const template = [
  {
    name: 'xxx',
    type: 'text',
    label: 'title',
    defaultValue: 'any',
    optional: false,
    editable: true,
    visible: true
  }
]

const elements = [] //.....

const create = T => createForm()(T)

class FormA {
  render() {
    
    return <Dynamic elements={elements} template={template} create={create} /*{...}*/ />
  }
}
