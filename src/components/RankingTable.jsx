import React from 'react';
import { Table } from 'flowbite-react';

const TABLE_HEAD = ["Logo", "Équipe", "Points"];

const RankingTable = ({ team1 }) => {
  return (
    <Table striped>

      <Table.Head>
        {TABLE_HEAD.map((head) => (
          <Table.HeadCell>
            { head }
          </Table.HeadCell>
        ))}
      </Table.Head>

      <Table.Body className="divide-y">
        {team1.map((data1, index) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              <img src={data1.img} alt={data1.name} />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {data1.name}
            </Table.Cell>
            <Table.Cell>
              {data1.points}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

    </Table>
  );
};

export default RankingTable;
