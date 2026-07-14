// import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

// import { Ticket } from "@/services/ticket";

// interface Props {
//   ticket: Ticket;
// }

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: "#0F172A",
//     padding: 30,
//     fontSize: 12,
//     color: "#ffffff",
//   },

//   container: {
//     border: "1 solid #334155",
//     borderRadius: 12,
//     overflow: "hidden",
//   },

//   topBar: {
//     backgroundColor: "#059669",
//     padding: 16,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#ffffff",
//   },

//   subtitle: {
//     fontSize: 11,
//     color: "#D1FAE5",
//     marginTop: 2,
//   },

//   badge: {
//     backgroundColor: "#2563EB",
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 12,
//   },

//   badgeText: {
//     color: "#fff",
//     fontSize: 10,
//     fontWeight: "bold",
//   },

//   body: {
//     padding: 22,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 6,
//   },

//   category: {
//     color: "#34D399",
//     marginBottom: 18,
//     fontSize: 12,
//   },

//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginTop: 15,
//     marginBottom: 10,
//     color: "#F8FAFC",
//   },

//   row: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },

//   label: {
//     width: 100,
//     color: "#94A3B8",
//   },

//   value: {
//     flex: 1,
//     color: "#ffffff",
//   },

//   divider: {
//     borderBottom: "1 solid #334155",
//     marginVertical: 18,
//   },
// });

// const TicketDocument = ({ ticket }: Props) => {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.container}>
//           {/* Header */}

//           <View style={styles.topBar}>
//             <View>
//               <Text style={styles.logo}>EventSphere</Text>

//               <Text style={styles.subtitle}>Professional Event Ticket</Text>
//             </View>

//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>
//                 {ticket.paymentStatus === "paid" ? "PAID TICKET" : "FREE PASS"}
//               </Text>
//             </View>
//           </View>

//           {/* Body */}

//           <View style={styles.body}>
//             <Text style={styles.title}>{ticket.eventTitle}</Text>

//             <Text style={styles.category}>{ticket.eventCategory}</Text>

//             <View style={styles.divider} />

//             <Text style={styles.sectionTitle}>Attendee Information</Text>

//             <View style={styles.row}>
//               <Text style={styles.label}>Name</Text>

//               <Text style={styles.value}>{ticket.attendeeName}</Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Email</Text>

//               <Text style={styles.value}>{ticket.attendeeEmail}</Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Phone</Text>

//               <Text style={styles.value}>{ticket.phone}</Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Address</Text>

//               <Text style={styles.value}>{ticket.address}</Text>
//             </View>

//             <View style={styles.divider} />

//             <Text style={styles.sectionTitle}>Event Information</Text>

//             <View style={styles.row}>
//               <Text style={styles.label}>Location</Text>

//               <Text style={styles.value}>{ticket.location}</Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Date</Text>

//               <Text style={styles.value}>{ticket.eventDate}</Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Time</Text>

//               <Text style={styles.value}>
//                 {ticket.startTime} - {ticket.endTime}
//               </Text>
//             </View>

//             <View style={styles.row}>
//               <Text style={styles.label}>Organizer</Text>

//               <Text style={styles.value}>{ticket.organizerName}</Text>
//             </View>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default TicketDocument;
