import { showNotification } from "@mantine/notifications";
import { apiRoutes } from "lib/axios";
import { DeleteDocumentApiResponse } from "pages/api/costumer/delete";
import { useMutation, useQueryClient } from "react-query";

interface Document {
  id: string;
}

interface UseDeleteHandleProps {
  url: `/${string}`;
  queryToRefetch: string;
  documents: Document[];
}

export default function useDeleteHandle({
  documents,
  queryToRefetch,
  url,
}: UseDeleteHandleProps) {
  const handleDelete = useMutation((documents: Document[]) => {
    return apiRoutes.post<DeleteDocumentApiResponse>(url, {
      documents,
    });
  });

  const queryClient = useQueryClient();
  const hasOneItemOnly = documents.length === 1;

  function deleteDocuments(document?: Document) {
    const documents_ = document?.id ? [{ id: document.id }] : undefined;

    handleDelete.mutate(documents_ || documents, {
      onSuccess(res, variables, context) {
        if (res.data?.deleted) {
          console.log(queryToRefetch);
          //   TODO: to performa implement strategy to change the value on cache.
          queryClient.refetchQueries([queryToRefetch]);
          showNotification({
            title: hasOneItemOnly ? "Item Eliminado" : "Itens Selecionados",
            message: hasOneItemOnly
              ? "O Item selecionado foi eliminado."
              : "Todos os itens selecionados foram eliminados.",
            color: "green",
          });
        }
      },
    });
  }

  const isLoading = handleDelete.isLoading;

  return { isLoading, deleteDocuments };
}
