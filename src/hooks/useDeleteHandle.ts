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
        //   TODO: to performa implement strategy to change the value on cache.
        showNotification({
          title: hasOneItemOnly ? "Item Eliminado" : "Itens Eliminados",
          message: hasOneItemOnly
            ? "O Item selecionado foi eliminado."
            : "Todos os itens selecionados foram eliminados.",
          color: "green",
        });
        queryClient.refetchQueries([queryToRefetch]);
      },
    });
  }

  const isLoading = handleDelete.isLoading;

  return { handleDelete, isLoading, deleteDocuments };
}
