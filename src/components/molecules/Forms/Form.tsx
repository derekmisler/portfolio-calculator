import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'
import { Form as FormikForm } from 'formik'

interface FormProps extends SpaceProps, LayoutProps {}

export const Form = styled(FormikForm)<FormProps>`
  ${layout}
  ${space}
  flex: 0 0 100%;
`
