const ROW_ENUM = {
  gutter: 16,
  col1: {
    md: { span: 24 },
    sm: { span: 24 }
  },
  col2: {
    md: { span: 12 },
    sm: { span: 24 }
  },
  col3: {
    md: { span: 8 },
    sm: { span: 24 }
  },
  col4: {
    md: { span: 6 },
    sm: { span: 24 }
  },
  rule: {
    phone: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  }
}

export default ROW_ENUM
