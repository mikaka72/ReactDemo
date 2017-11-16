import React, {PropTypes} from 'react';
import { Card, Icon } from 'semantic-ui-react';

const BasicCard = ({title, description}) => (
  <Card>
    <Card.Content header={title} />
    <Card.Content description={description} />
  </Card>
);

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default BasicCard;