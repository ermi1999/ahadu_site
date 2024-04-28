import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const reservedWords = [
  ["እውነት", "ሀሰት", "እና", "ከሆነ"],
  ["ካልሆነ", "እስከ", "ለዚህ", "መለያ"],
  ["ተግባር", "ክፍል", "ይህ", "ባዶ"],
  ["ታላቅ", "መልስ", "አውጣ", "ወይም"],
];

export default function ReservedWordsTable() {
  return (
    <Table className="mt-5">
      <TableCaption>A list of reserved words</TableCaption>
      <TableBody>
        {reservedWords.map((item, index) => (
          <TableRow key={index}>
            {item.map((word, i) => (
              <TableCell key={i}>{word}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
