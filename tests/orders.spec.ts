import { Client } from "../client";
import { OrdersApi, ItemRequestDto, OrderRequestDto, RefundRequestDto } from "../openapi/api";

describe("Orders API", () => {
  let client: Client;
  let ordersApi: OrdersApi;

  beforeEach(() => {
    client = new Client("http://localhost:3000");
    ordersApi = client.orders();
  });

  describe("API Instance", () => {
    it("should create orders API instance", () => {
      expect(ordersApi).toBeInstanceOf(OrdersApi);
    });

    it("should create orders API with access token", () => {
      client.setAccessToken("test-token");
      const api = client.orders();
      expect(api).toBeInstanceOf(OrdersApi);
    });

    it("should return same OrdersApi type from multiple calls", () => {
      const api1 = client.orders();
      const api2 = client.orders();
      expect(api1).toBeInstanceOf(OrdersApi);
      expect(api2).toBeInstanceOf(OrdersApi);
    });
  });

  describe("orderControllerCreateOrder", () => {
    it("should have createOrder method", () => {
      expect(ordersApi.orderControllerCreateOrder).toBeDefined();
      expect(typeof ordersApi.orderControllerCreateOrder).toBe("function");
    });

    it.skip("should create a new order", async () => {
      const orderData: OrderRequestDto = {
        user: { email: "test@example.com" } as any,
        useCredits: false,
        clientCompany: "client-123",
        invoiceContact: "contact-123",
        items: []
      };

      const result = await ordersApi.orderControllerCreateOrder("company-123", orderData);
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerGetOrder", () => {
    it("should have getOrder method", () => {
      expect(ordersApi.orderControllerGetOrder).toBeDefined();
      expect(typeof ordersApi.orderControllerGetOrder).toBe("function");
    });

    it.skip("should get a specific order", async () => {
      const result = await ordersApi.orderControllerGetOrder("company-123", "order-123");
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerGetPaginatedOrders", () => {
    it("should have getPaginatedOrders method", () => {
      expect(ordersApi.orderControllerGetPaginatedOrders).toBeDefined();
      expect(typeof ordersApi.orderControllerGetPaginatedOrders).toBe("function");
    });

    it.skip("should get paginated orders", async () => {
      const result = await ordersApi.orderControllerGetPaginatedOrders(
        "company-123",
        1,
        10,
        "pending",
        0,
        false
      );
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });

  describe("orderControllerDeleteOrder", () => {
    it("should have deleteOrder method", () => {
      expect(ordersApi.orderControllerDeleteOrder).toBeDefined();
      expect(typeof ordersApi.orderControllerDeleteOrder).toBe("function");
    });

    it.skip("should delete an order", async () => {
      const result = await ordersApi.orderControllerDeleteOrder("order-123", "company-123");
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerAddItem", () => {
    it("should have addItem method", () => {
      expect(ordersApi.orderControllerAddItem).toBeDefined();
      expect(typeof ordersApi.orderControllerAddItem).toBe("function");
    });

    it.skip("should add item to order", async () => {
      const itemData: ItemRequestDto = {
        resourceName: "example.com",
        action: "item/create" as any,
        responseDataFieldNames: {},
        autorenew: true,
        duration: "12" as any,
        product: "product-123",
        domainNameData: {} as any
      };

      const result = await ordersApi.orderControllerAddItem(
        "order-123",
        "company-123",
        itemData
      );
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerRemoveItem", () => {
    it("should have removeItem method", () => {
      expect(ordersApi.orderControllerRemoveItem).toBeDefined();
      expect(typeof ordersApi.orderControllerRemoveItem).toBe("function");
    });

    it.skip("should remove item from order", async () => {
      const result = await ordersApi.orderControllerRemoveItem(
        "order-123",
        "item-123",
        "company-123"
      );
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerChangeInvoiceContact", () => {
    it("should have changeInvoiceContact method", () => {
      expect(ordersApi.orderControllerChangeInvoiceContact).toBeDefined();
      expect(typeof ordersApi.orderControllerChangeInvoiceContact).toBe("function");
    });

    it.skip("should change invoice contact for order", async () => {
      const result = await ordersApi.orderControllerChangeInvoiceContact(
        "order-123",
        "company-123",
        "new-contact-123"
      );
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerItemRefund", () => {
    it("should have itemRefund method", () => {
      expect(ordersApi.orderControllerItemRefund).toBeDefined();
      expect(typeof ordersApi.orderControllerItemRefund).toBe("function");
    });

    it.skip("should process item refund", async () => {
      const refundData: RefundRequestDto = {
        refundItems: [["item-123", "10.00"]],
        comment: "Customer request"
      };

      const result = await ordersApi.orderControllerItemRefund("company-123", refundData);
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerResendOrderEmail", () => {
    it("should have resendOrderEmail method", () => {
      expect(ordersApi.orderControllerResendOrderEmail).toBeDefined();
      expect(typeof ordersApi.orderControllerResendOrderEmail).toBe("function");
    });

    it.skip("should resend order email", async () => {
      const emails = ["test@example.com"];
      const result = await ordersApi.orderControllerResendOrderEmail(
        "company-123",
        "order-123",
        emails
      );
      expect(result).toBeDefined();
    });
  });

  describe("orderControllerResendPaymentEmail", () => {
    it("should have resendPaymentEmail method", () => {
      expect(ordersApi.orderControllerResendPaymentEmail).toBeDefined();
      expect(typeof ordersApi.orderControllerResendPaymentEmail).toBe("function");
    });

    it.skip("should resend payment email", async () => {
      const emails = ["test@example.com"];
      const result = await ordersApi.orderControllerResendPaymentEmail("company-123", emails);
      expect(result).toBeDefined();
    });
  });
});
